import type React from "react"
import { cn } from "@/lib/utils"

interface SemanticSectionProps {
  id?: string
  title: string
  description?: string
  className?: string
  children: React.ReactNode
  titleClassName?: string
  descriptionClassName?: string
  contentClassName?: string
  as?: "section" | "article" | "aside" | "div"
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function SemanticSection({
  id,
  title,
  description,
  className,
  children,
  titleClassName,
  descriptionClassName,
  contentClassName,
  as: Component = "section",
  titleAs: TitleComponent = "h2",
}: SemanticSectionProps) {
  return (
    <Component id={id} className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <TitleComponent className={cn("text-3xl font-bold text-center mb-4 text-foreground", titleClassName)}>
          {title}
        </TitleComponent>
        {description && (
          <p className={cn("text-center text-muted-foreground mb-8 max-w-2xl mx-auto", descriptionClassName)}>
            {description}
          </p>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </Component>
  )
}
