import { Html, Text } from '@react-email/components';

const Email = ({ message }: { message: string }) => (
  <Html lang="en">
    <Text>{message}</Text>
  </Html>
);

export default Email;
