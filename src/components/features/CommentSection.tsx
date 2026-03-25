import { useState, useEffect } from 'react';
import { MessageSquare, Send, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { supabase } from '@/lib/api';
import type { Comment, CommentFormData } from '@/types/comment';

interface CommentSectionProps {
  pageUrl: string;
  title?: string;
}

export function CommentSection({ pageUrl, title = 'Community Feedback' }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    email: '',
    comment: '',
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Fetch comments on mount
  useEffect(() => {
    fetchComments();
  }, [pageUrl]);

  const fetchComments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('page_url', pageUrl)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    // Validation
    if (formData.name.trim().length < 2) {
      setFormError('Name must be at least 2 characters');
      return;
    }
    if (formData.comment.trim().length < 10) {
      setFormError('Comment must be at least 10 characters');
      return;
    }
    if (formData.comment.trim().length > 2000) {
      setFormError('Comment must be less than 2000 characters');
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from('comments').insert({
      name: formData.name.trim(),
      email: formData.email.trim() || null,
      comment: formData.comment.trim(),
      page_url: pageUrl,
    });

    if (error) {
      console.error('Error submitting comment:', error);
      setFormError('Failed to submit comment. Please try again.');
      setSubmitting(false);
    } else {
      setFormSuccess(true);
      setFormData({ name: '', email: '', comment: '' });
      fetchComments(); // Refresh comments list
      setSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => setFormSuccess(false), 5000);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="Your name"
                  disabled={submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="your.email@example.com"
                  disabled={submitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-1">
                Comment <span className="text-destructive">*</span>
              </label>
              <textarea
                id="comment"
                required
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none"
                placeholder="Share your thoughts, questions, or feedback..."
                disabled={submitting}
              />
              <div className="text-xs text-muted-foreground mt-1">
                {formData.comment.length}/2000 characters
              </div>
            </div>

            {formError && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
                {formError}
              </div>
            )}

            {formSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-800">
                Thank you for your feedback! Your comment has been posted.
              </div>
            )}

            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              <Send className="w-4 h-4 mr-2" />
              {submitting ? 'Submitting...' : 'Submit Comment'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div>
        <h3 className="font-display text-heading-md text-foreground mb-4">
          Recent Comments ({comments.length})
        </h3>

        {loading ? (
          <div className="text-center py-8 text-muted-foreground">
            Loading comments...
          </div>
        ) : comments.length === 0 ? (
          <Card className="border-2 border-dashed">
            <CardContent className="p-8 text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No comments yet. Be the first to share your thoughts!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{comment.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {formatDate(comment.created_at)}
                        </div>
                      </div>
                      <p className="text-muted-foreground whitespace-pre-wrap break-words">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
