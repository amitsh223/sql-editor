import styled from "@emotion/styled"
import { QUERIES } from "../Utils/MediaQueris";

const Panel = styled.section`
    width: ${props => props.width ?? "100%"};
    height: ${props => props.height ?? "100%"};
    background-color: ${props => props.backgroundColor};
    border-left: ${props => props.borderLeft ? "1px solid var(--grey-200)" : ""};
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};

    @media ${QUERIES.tabletOrSmaller} {
        display: ${props => props.hideOnTablet ? "none" : "flex"};
    }
`;

Panel.Header = styled.div`
    display: flex;
    justify-content: ${props => props.justify ?? "space-between" };
    border-bottom: 1px solid var(--grey-200);

    @media ${QUERIES.tabletOrSmaller} {
        display: ${props => props.hideOnTablet ? "none" : "flex"};
    }
`;

export default Panel;