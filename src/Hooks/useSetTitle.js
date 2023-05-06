import { useEffect } from "react";

const useSetTitle = (title) => {

    useEffect( () => {

        document.title = `${title} - The Dragon News`;

    }, [title]);

}

export default useSetTitle;