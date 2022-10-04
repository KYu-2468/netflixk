// AWS Authenticator
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Signin = ({ signOut, user }) => {
  return (
    <>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
};

export default withAuthenticator(Signin);
