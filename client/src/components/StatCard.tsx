import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: "default" | "success" | "warning" | "danger";
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
}: StatCardProps) {
  const variantStyles = {
    default: "border-l-blue-500",
    success: "border-l-emerald-500",
    warning: "border-l-amber-500",
    danger: "border-l-red-500",
  };

  return (
    <div className={`bg-slate-900/50 border border-slate-800 border-l-4 ${variantStyles[variant]} rounded-lg p-6 shadow-xl hover:shadow-2xl hover:bg-slate-900/70 transition-all duration-300`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-400 mb-2">
            {title}
          </p>
          <p className="text-3xl font-bold text-slate-50">{value}</p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-2">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className="ml-4 p-3 bg-slate-800 rounded-lg border border-slate-700">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        )}
      </div>
    </div>
  );
}
