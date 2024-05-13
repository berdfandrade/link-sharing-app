import { Text, Flex, Select } from '@chakra-ui/react'
import OPTIONS from './OPTIONS'


export default function SelectPlatform() {
    return (
        <>
            <Select bg={'white'}>
                {OPTIONS.map((option, index) => (
                    <>
                        <option key={index}>
                            <Flex alignItems="center" flexDir='row' gap="2">
                                <Text as='b'>{option.label}
                                </Text>
                            </Flex>
                        </option>
                    </>
                ))}
            </Select>
        </>
    )
}