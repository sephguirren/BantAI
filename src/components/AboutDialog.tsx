import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ASSETS } from "@/lib/content";

export function AboutDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-border sm:max-w-lg">
        <DialogHeader className="items-center space-y-4 text-center">
          <img src={ASSETS.logo} alt="BantAI" className="mx-auto h-44 w-auto object-contain" />
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-extrabold tracking-tight">
              Bant<span className="text-accent">AI</span>
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Bantay + AI — your AI-powered flood prediction and disaster preparedness companion
              for Abra, Philippines. Forecast floods, receive real-time alerts, and find safe
              routes in one platform.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2">
          <a href="#download" className="btn-primary text-center">
            Download App
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Explore features
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}