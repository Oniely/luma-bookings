import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

const COGNITO_REGION = "us-east-2";

export const cognitoClient = new CognitoIdentityProviderClient({
  region: COGNITO_REGION,
});
