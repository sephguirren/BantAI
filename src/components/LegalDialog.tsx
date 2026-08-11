import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type LegalSection = {
  heading?: string;
  body: string;
};

export function LegalDialog({
  open,
  onOpenChange,
  title,
  updated,
  sections,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  updated: string;
  sections: readonly LegalSection[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto border-border sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{updated}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          {sections.map((section) => (
            <div key={section.heading ?? section.body.slice(0, 24)}>
              {section.heading && (
                <h4 className="mb-1 font-semibold text-foreground">{section.heading}</h4>
              )}
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
