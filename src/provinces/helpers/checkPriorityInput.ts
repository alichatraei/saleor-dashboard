const _ONLY_NUMBER_REGEX = /^[0-9\b]+$/;
const checkPriorityInput = (value: string) => _ONLY_NUMBER_REGEX.test(value);

export default checkPriorityInput;
