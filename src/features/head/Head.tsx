import { HeadProvider, Title, Meta } from 'react-head';

export default function Head() {
    const title: string = "Media Lib UI";

    return (
        <>
            <HeadProvider>
                <Meta charSet="UTF-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Title>{title}</Title>
            </HeadProvider>
        </>
    )
}