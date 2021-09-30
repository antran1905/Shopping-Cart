import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
	margin: 40px;

`;

export const StyledButton = styled(IconButton)`
	position: fixed;
	z-index: 100;
	right: 20px;
	top: 20px;
`;

export const ButtonDarkMode = styled(Button)`
	position: fixed;
	z-index: 100;
	top: 20px;
	margin: auto;
`;