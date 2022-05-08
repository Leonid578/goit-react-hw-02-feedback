import { SectionBox, Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
    <SectionBox >
        { title && <h2 className={Title}>{title}</h2>}
        {children} 
    </SectionBox>
    )
}
Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node
}