import styled from "styled-components";
import InputNumeric from "./InputNumeric";

const StyledContainer = styled.div`
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    max-width: 400px;
`;

export default function Panell(params) {
    return (
        <StyledContainer>
            <div>
                <label htmlFor="webPagesId">Número de pàgines: </label>
                <InputNumeric type="number" min="1" value={params.value.webPages} id="webPagesId" name="webPages" handleChange={params.handleChange} />
            </div>
            <div>
                <label htmlFor="webLanguagesId">Número d'idiomes: </label>
                <InputNumeric type="number" min="1" value={params.value.webLanguages} id="webLanguagesId" name="webLanguages" handleChange={params.handleChange} />
            </div>
        </StyledContainer>
    );
}