"use client";

import {
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";

type Props = { children: ReactNode };

type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-rose-100 bg-rose-50/80 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold text-rose-900">
            Something went wrong loading this tool.
          </p>
          <p className="mt-2 text-sm text-rose-800/90">
            Refresh the page or try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="mt-6 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
