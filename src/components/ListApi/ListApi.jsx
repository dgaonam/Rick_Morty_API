import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "../Character"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    usePaginator
} from "chakra-paginator";

const ListApi = ({ idRequest }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [paginas, setPaginas] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState('/api/character/' + idRequest);

    const siguientePagina = () => {
        if (currentPage <= paginas) {
            setCurrentPage(currentPage + 1)
            console.log(currentPage);
        } else {
            console.log("llegaste a la ultima pagina");
        }
    }
    const anteriorPagina = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            console.log(currentPage);
        } else {
            console.log("llegaste a la primer pagina");
        }
    }

    const pageNumbers = [...Array(paginas + 1).keys()].slice(1)

    const obtenerApi = () => {

        axios.get(url).then(
            (result) => {

                if (typeof result.data.results === 'undefined')
                    setData(result.data);
                else {
                    setPaginas(result.data.info.pages);
                    setData(result.data.results);
                }

            }
        ).catch(
            (result) => {
                //console.log(result)
                return [];
            }
        );
    };

    useEffect(() => {
        obtenerApi();
    }, [url]);

    useEffect(() => {
        if (parseInt(id) > 0) {
            setUrl('/api/character/' + [id]);
        } else if (idRequest.length >= 1) {
            setUrl('/api/character/' + idRequest);
        } else {
            setUrl('/api/character/?page=' + currentPage);
        }
    });

    const paginacion = () => {
        return (
            <>
                <Paginator
                    pagesQuantity={paginas}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                >
                    <Container align="center" justify="space-between" w="full" p={4}>
                        <Previous>
                            Previous
                            {/* Or an icon from `react-icons` */}
                        </Previous>
                        <PageGroup isInline align="center" />
                        <Next>
                            Next
                            {/* Or an icon from `react-icons` */}
                        </Next>
                    </Container>
                </Paginator>
            </>
        );
    };

    return (<>
        {data.length > 1 ? paginacion() : ""}

        {data.length > 1 ? data.map((character) => {
            return (
                <Character key={character.id} id={character.id} name={character.name} episode={[]} img={character.image} species={character.species} status={character.status} />
            );
        }) : <>
            <Link to="/">Regresar</Link>
            <Character key={data.id} id={data.id} name={data.name} episode={data.episode} img={data.image} species={data.species} status={data.status} />
        </>


        }

    </>);
};

export default ListApi;