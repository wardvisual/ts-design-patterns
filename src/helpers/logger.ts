class Logger {
  public static generateRandomString(): string {
    const randomString = Buffer.from(Math.random().toString()).toString(
      "base64"
    );

    return randomString;
  }

  public static log(message: string) {
    console.log(message);
  }
}

export default Logger;
