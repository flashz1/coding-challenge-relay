// @flow
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import { AppBar, Button, Toolbar } from '@material-ui/core';

type TProps = {
  +children: React$Node,
};

export default function RootLayout({ children }: TProps) {
  const router = useRouter();

  const onClick = (route) => router.push({ pathname: route });

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Button onClick={() => onClick('/')}>Home</Button>
          <Button onClick={() => onClick('/create')}>Create product</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='xl'>{children}</Container>
    </>
  );
}
