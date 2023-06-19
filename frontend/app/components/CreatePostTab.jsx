import { Avatar, FormControl, Textarea, Button } from "@chakra-ui/react";

const CreatePostTab = () => {
    return (
        <div className="relative w-full flex flex-col items-center p-4 bg-[#242850] rounded-xl shadow-md">
            {/* <small className="absolute left-4 tracking-wider text-gray-400">
                What's new today
            </small> */}
            <h1 className="font-bold text-xl mb-4">Make a Post</h1>
            <FormControl>
                <Textarea
                    placeholder="Share your thoughts..."
                    mb={3}
                    resize="none"
                />
                <Button w="full" colorScheme="messenger">
                    Post
                </Button>
            </FormControl>
        </div>
    );
};

export default CreatePostTab;
