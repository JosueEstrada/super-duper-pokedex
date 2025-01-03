import { TypeBadgeProps, typeEmojis } from "../types/pokemon";

export function TypeBadge({ type, size = "md" }: TypeBadgeProps) {
  const typeInfo = typeEmojis[type];
  const sizeClasses = {
    sm: "w-8 h-8 text-2xl",
    md: "w-12 h-12 text-3xl",
    lg: "w-24 h-24 text-6xl",
  };

  return (
    <div className={`flex flex-col items-center gap-1`}>
      <div
        className={` ${sizeClasses[size]} ${typeInfo.color} flex items-center justify-center rounded-full transition-all duration-300`}
      >
        <span role="img" aria-label={type}>
          {typeInfo.emoji}
        </span>
      </div>
      <span className="text-sm uppercase">{type}</span>
    </div>
  );
}
