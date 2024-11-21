import { Helmet } from "react-helmet";

const Title = ({title}) => {
    return (
        <Helmet>
            <title>Lingo Bingo | {title} </title>
        </Helmet>
    );
};

export default Title;