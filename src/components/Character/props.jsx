import PropTypes from 'prop-types';

const props={
    PropTypes:{
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        image: PropTypes.string,
        episode: PropTypes.array,
    },
    defaulProps:{
        name: "unknown",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [],
    }
}

export default props;