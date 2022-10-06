// AWS Authenticator
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Auth from "aws-amplify";
import aws_exports from "../aws-exports";
Auth.configure(aws_exports);

const Signin = ({ signOut, user }) => {
  return (
    <>
      <Button onClick={signOut} style={{ backgroundColor: "white" }}>
        Sign out
      </Button>
    </>
  );
};

export default withAuthenticator(Signin);
