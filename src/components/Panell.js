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
                <label for="webPagesId">Número de pàgines: </label>
                <InputNumeric type="number" min="0" value="1" id="webPagesId" name="webPages" handleChange={params.handleChange} />
            </div>
            <div>
                <label for="webLanguagesId">Número d'idiomes: </label>
                <InputNumeric type="number" min="0" value="1" id="webLanguagesId" name="webLanguages" handleChange={params.handleChange} />
            </div>
        </StyledContainer>
    );
}