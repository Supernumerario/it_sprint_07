import styled from "styled-components";

const StyledContainer = styled.div`
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    max-width: 300px;
`;

export default function Panell({handleInput}) {
    return (
        <StyledContainer>
            <div>
                <label for="webPagesId">Número de pàgines: </label>
                <input type="text" id="webPagesId" name="webPages" onChange={handleInput}></input>
            </div>
            <div>
            <label for="webLanguagesId">Número d'idiomes: </label>
                <input type="text" id="webLanguagesId" name="webLanguages" onChange={handleInput}></input>
            </div>
        </StyledContainer>
    );
}