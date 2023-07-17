import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import TodoCardWithoutPicture from "./TodoCardWithoutPicture";

const TodoContainerReviewRow = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TodoCardWithoutPicture
          taskName={"Space Task 3"}
          title={"Astronomy Or Astrology"}
        >
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            width={"20px"}
            height={"20px"}
          />
        </TodoCardWithoutPicture>

        <TodoCardWithoutPicture
          taskName={"Space Task 1"}
          title={"Astronomy Binoculars A Great"}
        >
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            width={"20px"}
            height={"20px"}
          />
        </TodoCardWithoutPicture>

        <Flex
          width={"230px"}
          padding={4}
          flexDirection={"column"}
          gap={7}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          borderRadius={"5px"}
          boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        >
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.8925 8.80249C20.7057 8.61523 20.452 8.51 20.1875 8.51C19.923 8.51 19.6693 8.61523 19.4825 8.80249L14.5925 13.6825L9.7025 8.79249C9.51567 8.60523 9.26202 8.5 8.9975 8.5C8.73298 8.5 8.47933 8.60523 8.2925 8.79249C7.9025 9.18249 7.9025 9.81249 8.2925 10.2025L13.1825 15.0925L8.2925 19.9825C7.9025 20.3725 7.9025 21.0025 8.2925 21.3925C8.6825 21.7825 9.3125 21.7825 9.7025 21.3925L14.5925 16.5025L19.4825 21.3925C19.8725 21.7825 20.5025 21.7825 20.8925 21.3925C21.2825 21.0025 21.2825 20.3725 20.8925 19.9825L16.0025 15.0925L20.8925 10.2025C21.2725 9.82249 21.2725 9.18249 20.8925 8.80249Z"
                  fill="#C3CAD9"
                />
              </svg>
            </Box>

            <Box>
              <Input
                placeholder="Task name or type"
                size="xs"
                fontSize={"12px"}
                color={"#ADB8CC"}
                border={"none"}
              />
            </Box>

            <Box>
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
                width={"20px"}
                height={"20px"}
              />
            </Box>
          </Flex>

          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex gap={1} alignItems={"center"} justifyContent={"center"}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.4 9.5L17.16 8.3C17.07 7.84 16.66 7.5 16.18 7.5H9C8.45 7.5 8 7.95 8 8.5V23.5C8 24.05 8.45 24.5 9 24.5C9.55 24.5 10 24.05 10 23.5V17.5H15.6L15.84 18.7C15.93 19.17 16.34 19.5 16.82 19.5H22C22.55 19.5 23 19.05 23 18.5V10.5C23 9.95 22.55 9.5 22 9.5H17.4Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.99 5.5C9.47 5.5 5 9.98 5 15.5C5 21.02 9.47 25.5 14.99 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 14.99 5.5ZM15 23.5C10.58 23.5 7 19.92 7 15.5C7 11.08 10.58 7.5 15 7.5C19.42 7.5 23 11.08 23 15.5C23 19.92 19.42 23.5 15 23.5ZM14.78 10.5H14.72C14.32 10.5 14 10.82 14 11.22V15.94C14 16.29 14.18 16.62 14.49 16.8L18.64 19.29C18.98 19.49 19.42 19.39 19.62 19.05C19.83 18.71 19.72 18.26 19.37 18.06L15.5 15.76V11.22C15.5 10.82 15.18 10.5 14.78 10.5Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>
            </Flex>

            <Button colorScheme="blue" size="sm">
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TodoContainerReviewRow;
