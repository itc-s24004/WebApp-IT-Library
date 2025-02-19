
type Props = {
    params: {
        id: string;
    };
    searchParams: {
        dk?: string;
    };
};


export default async function page({params}: Props) {
    return <h1>{decodeURI(params.id)}</h1>
}



