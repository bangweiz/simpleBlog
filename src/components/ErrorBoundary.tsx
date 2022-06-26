import {Component, PropsWithChildren, ReactElement} from "react";

type FallbackRender = (props: { error: Error | null }) => ReactElement;

interface Props {
    fallbackRender: FallbackRender;
}

interface State {
    error: Error | null;
}

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
    state = { error: null };

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { error } = this.state;
        const { fallbackRender, children } = this.props;
        if (error) {
            return fallbackRender({ error });
        } else {
            return children;
        }
    }
}