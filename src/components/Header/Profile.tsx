import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            joao.oliveira0117@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="João Oliveira" />
    </Flex>
  );
}
