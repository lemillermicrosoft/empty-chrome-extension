export interface DefaultRequest {
  type: "DEFAULT_MESSAGE";
}

// Background script broadcasting current status
export interface DefaultResponse {
  type: "DEFAULT_RESPONSE";
  id: string;
  text: string;
}

export type MessageType = DefaultRequest | DefaultResponse;
