import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  isLoading?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus-visible:ring-slate-900",
  secondary:
    "bg-[#4ade80] text-slate-900 shadow-sm hover:bg-[#22c55e] hover:text-white focus-visible:ring-[#22c55e]",
  ghost:
    "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 focus-visible:ring-slate-400",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  function Button(
    {
      variant = "primary",
      className = "",
      children,
      disabled,
      isLoading,
      ...props
    },
    ref
  ) {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 active:scale-[0.99]";
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || isLoading}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
