import { Flex, Select, Icon } from "@chakra-ui/react";
import { useState } from "react";
import OPTIONS from "./OPTIONS";

export default function SelectPlatform() {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selected = OPTIONS.find((option) => option.label === selectedValue);
    setSelectedOption(selected);
  };

  return (
    <Flex alignItems="center">
      <Icon as={selectedOption.icon} boxSize={5} mr={2} />
      <Select bg="white" value={selectedOption.label} onChange={handleChange}>
        {OPTIONS.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
