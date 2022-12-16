export class MessageModel {
  public id: number;
  public text: string;
  public userName: string;
  constructor(id: number, message: string, username: string) {
    this.id = id;
    this.text = message;
    this.userName = username;
  }

  public static fromJson(json: any): MessageModel {
    const message = new MessageModel(json.id, json.message, json.username);
    return message;
  }

  public static fromJsonArray(json: any[]): MessageModel[] {
    return json.map(MessageModel.fromJson);
  }

  public static fromArrayToMessageArray(array: any[]): MessageModel[] {
    return array.map((item) => {
      return new MessageModel(item.id, item.text, item.userName);
    });
  }
}
