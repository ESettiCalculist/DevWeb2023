import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1>Agenda de {title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header; 
