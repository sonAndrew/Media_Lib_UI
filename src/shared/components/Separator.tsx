

interface ISeparator {
    mTop: string,
    mRight: string,
    mBottom: string,
    mLeft: string
}

export default function Separator({ mTop, mRight, mBottom, mLeft }: ISeparator) {

    return (
        <span style={{
            marginTop: mTop,
            marginRight: mRight,
            marginBottom: mBottom,
            marginLeft: mLeft
        }} ></span>
    )
}