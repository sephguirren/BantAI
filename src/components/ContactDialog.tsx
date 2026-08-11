import * as React from "react";
import { Loader2, Send, X } from "lucide-react";

export function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [pending, setPending] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);

  const closeAll = () => {
    setSuccessOpen(false);
    onOpenChange(false);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("The contact form is not configured yet.");
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          from_name: name,
          subject: `New contact message from ${name} (BantAI website)`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send your message. Please try again.");
      }
      setSuccessOpen(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-fade-in-up text-foreground">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-forest/10 p-2 text-forest">
                  <Send className="h-5 w-5 text-[#0F4C3A]" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-foreground">Contact Us</h3>
                  <p className="text-xs text-muted-foreground">
                    Send a message to our support team.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={submit} className="p-6 space-y-4 text-left">
              {error && (
                <div className="rounded-lg bg-destructive/10 p-3 text-xs font-medium text-destructive">
                  {error}
                </div>
              )}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  disabled={pending}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  disabled={pending}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here."
                  value={message}
                  disabled={pending}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border mt-6">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  disabled={pending}
                  className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors border border-border cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={pending}
                  className="px-5 py-2 text-sm font-medium rounded-lg text-white bg-[#0F4C3A] hover:bg-[#0b382b] transition-colors flex items-center justify-center min-w-[90px] cursor-pointer"
                >
                  {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl animate-scale-in text-foreground text-center">
            <div className="flex justify-center mb-4">
              <svg className="h-16 w-16" viewBox="0 0 52 52">
                <circle
                  className="stroke-[#0F4C3A] fill-none stroke-[3] animate-draw-circle"
                  cx="26"
                  cy="26"
                  r="24"
                />
                <path
                  className="stroke-[#0F4C3A] fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round animate-draw-check"
                  d="M16 27l7 7 14-14"
                />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-foreground">Message Sent!</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Thank you for contacting us. Our team has received your message and will review it
              shortly.
            </p>
            <button
              type="button"
              onClick={closeAll}
              className="mt-6 w-full py-2.5 px-4 text-sm font-medium rounded-lg text-white bg-[#0F4C3A] hover:bg-[#0b382b] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
