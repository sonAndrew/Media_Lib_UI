import { HeadProvider, Title, Meta } from 'react-head';
import { title } from '../../shared/GeneralConstants.ts'

export default function Head() {

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