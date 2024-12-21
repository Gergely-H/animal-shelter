export const delayExecution = async (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
