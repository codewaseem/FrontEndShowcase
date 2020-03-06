/** Declaration file generated by dts-gen */

export class FormattedHTMLMessage {
    constructor(...args: any[]);

    render(): any;

    static defaultProps: {
        tagName: string;
        values: {
        };
    };

    static displayName: string;

}

export class FormattedMessage {
    constructor(...args: any[]);

    render(): any;

    shouldComponentUpdate(nextProps: any): any;

    static defaultProps: {
        values: {
        };
    };

    static displayName: string;

}

export class FormattedRelativeTime {
    constructor(props: any);

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    render(): any;

    scheduleNextUpdate(_a: any, _b: any): any;

    static defaultProps: {
        unit: string;
        value: number;
    };

    static displayName: string;

    static getDerivedStateFromProps(props: any, state: any): any;

}

export class IntlProvider {
    constructor(...args: any[]);

    render(): any;

    static displayName: string;

    static getDerivedStateFromProps(props: any, _a: any): any;

}

export const IntlContext: {
    $$typeof: any;
    Consumer: {
        $$typeof: any;
        Consumer: any;
        Provider: {
            $$typeof: any;
        };
    };
    Provider: {
        $$typeof: any;
    };
};

export const IntlContextConsumer: {
    $$typeof: any;
    Consumer: any;
    Provider: {
        $$typeof: any;
    };
};

export const IntlContextProvider: {
    $$typeof: any;
};

export const RawIntlProvider: {
    $$typeof: any;
};

export function FormattedDate(props: any): any;

export function FormattedDateParts(props: any): any;

export function FormattedDisplayName(props: any): any;

export function FormattedList(props: any): any;

export function FormattedNumber(props: any): any;

export function FormattedNumberParts(props: any): any;

export function FormattedPlural(props: any): any;

export function FormattedTime(props: any): any;

export function FormattedTimeParts(props: any): any;

export function Link(_ref: any): any;

export function changeLocale(language: any, to: any): any;

export function createIntl(config: any, cache: any): any;

export function createIntlCache(): any;

export function defineMessages(msgs: any): any;

export function injectIntl(WrappedComponent: any, options: any): any;

export function navigate(to: any, options: any): void;

export function useIntl(): any;

export function withIntl(Component: any): any;

export namespace FormattedDate {
    const displayName: string;

}

export namespace FormattedDateParts {
    const displayName: string;

}

export namespace FormattedDisplayName {
    const displayName: string;

}

export namespace FormattedList {
    const displayName: string;

}

export namespace FormattedNumber {
    const displayName: string;

}

export namespace FormattedNumberParts {
    const displayName: string;

}

export namespace FormattedPlural {
    const displayName: string;

    function WrappedComponent(props: any): any;

    function apply(p0: any, p1: any): any;

    function bind(p0: any): any;

    function call(p0: any): any;

    namespace WrappedComponent {
        const defaultProps: {
            type: string;
        };

        const displayName: string;

    }

}

export namespace FormattedTime {
    const displayName: string;

}

export namespace FormattedTimeParts {
    const displayName: string;

}

export namespace IntlProvider {
    namespace defaultProps {
        const defaultFormats: {
        };

        const defaultLocale: string;

        const formats: {
        };

        const messages: {
        };

        const textComponent: any;

        const timeZone: any;

        function onError(error: any): void;

    }

}

export namespace Link {
    const defaultProps: {
        to: string;
    };

    namespace propTypes {
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function language(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace language {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace to {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }

}
