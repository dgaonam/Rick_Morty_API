import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider,
    ListItem,
    OrderedList,
    Grid,
    GridItem,
    Center
} from "@chakra-ui/react";

import props from "./props";
import { Link } from "react-router-dom";

const Character = ({ id, name, img, episode, species, status }) => {
    return <>
        <Center>
        <Card style={{ width: '80rem' }}>
            <CardBody>
                <Grid
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Link key={id} to={`/characters/${id}`}>
                        <Stack mt='6' spacing='3'>
                                <Heading size='md'>{id}
                                </Heading>
                            </Stack>
                        </Link>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Link key={id} to={`/characters/${id}`}>
                            <Image
                                src={img}
                                alt={name}
                                borderRadius='lg'
                            />
                        </Link>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} >
                        <Link key={id} to={`/characters/${id}`}>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Nombre: {name} <br />
                                    Especie: {species} <br />
                                    Estatus: {status}
                                </Heading>
                            </Stack>
                        </Link>
                        <OrderedList>
                            {episode.map((url, name) => (
                                <ListItem key={name}>
                                    <Link to={url}>{url}</Link></ListItem>
                            ))}
                        </OrderedList>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
        </Center>
    </>
}

Character.prototype = props.PropTypes;
Character.defaultProps = props.defaulProps;

export default Character;