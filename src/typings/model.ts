import { Nullable, FileType } from '@tager/admin-services';
import { SingleFileInputValueType } from '@tager/admin-ui';

/** Common */
export interface FieldConfig {
  readonly name: string;
  readonly label: string;
  readonly type: string;
  readonly meta: Record<string, unknown>;
  readonly fields?: Array<FieldConfig>;
}

export interface Field<Config extends FieldConfig, Value = unknown> {
  readonly id: string;
  readonly config: Config;
  value: Value;
}

export type FieldShortType<Value> = {
  name: string;
  value: Value;
};

export interface UnknownFieldConfig extends FieldConfig {
  type: 'UNKNOWN';
}

export type UnknownField = Field<UnknownFieldConfig, null>;
export type UnknownIncomingValue = null;
export type UnknownOutgoingValue = null;

/** STRING */

export interface StringFieldConfig extends FieldConfig {
  type: 'STRING';
}
export type StringField = Field<StringFieldConfig, string>;
export type StringIncomingValue = Nullable<string>;
export type StringOutgoingValue = string;

/** URL */

export interface UrlFieldConfig extends FieldConfig {
  type: 'URL';
}
export type UrlField = Field<UrlFieldConfig, string>;
export type UrlIncomingValue = Nullable<string>;
export type UrlOutgoingValue = string;

/** DATE */

export interface DateFieldConfig extends FieldConfig {
  type: 'DATE';
}
export type DateField = Field<DateFieldConfig, string>;
export type DateIncomingValue = Nullable<string>;
export type DateOutgoingValue = string;

/** DATETIME */

export interface DateTimeFieldConfig extends FieldConfig {
  type: 'DATETIME';
}
export type DateTimeField = Field<DateTimeFieldConfig, string>;
export type DateTimeIncomingValue = Nullable<string>;
export type DateTimeOutgoingValue = string;

/** TEXT */

export interface TextFieldConfig extends FieldConfig {
  type: 'TEXT';
}
export type TextField = Field<TextFieldConfig, string>;
export type TextIncomingValue = Nullable<string>;
export type TextOutgoingValue = string;

/** HTML */

export interface HtmlFieldConfig extends FieldConfig {
  type: 'HTML';
}
export type HtmlField = Field<HtmlFieldConfig, string>;
export type HtmlIncomingValue = Nullable<string>;
export type HtmlOutgoingValue = string;

/** NUMBER */

export interface NumberFieldConfig extends FieldConfig {
  type: 'NUMBER';
}
export type NumberField = Field<NumberFieldConfig, string>;
export type NumberIncomingValue = Nullable<string>;
export type NumberOutgoingValue = string;

/** IMAGE */

export interface ImageFieldConfig extends FieldConfig {
  type: 'IMAGE';
  meta: {
    scenario?: Nullable<string>;
  };
}
export type ImageField = Field<
  ImageFieldConfig,
  Nullable<SingleFileInputValueType>
>;
export type ImageIncomingValue = Nullable<FileType>;
export type ImageOutgoingValue = Nullable<number>;

/** GALLERY */

export interface GalleryFieldConfig extends FieldConfig {
  type: 'GALLERY';
  meta: {
    scenario?: Nullable<string>;
    withCaptions?: boolean;
  };
}
export type GalleryField = Field<
  GalleryFieldConfig,
  Array<SingleFileInputValueType>
>;
export type GalleryIncomingValue = Array<FileType>;
export type GalleryOutgoingValue = Array<number>;

/** FILE */

export interface FileFieldConfig extends FieldConfig {
  type: 'FILE';
}
export type FileField = Field<
  FileFieldConfig,
  Nullable<SingleFileInputValueType>
>;
export type FileIncomingValue = Nullable<FileType>;
export type FileOutgoingValue = Nullable<number>;

/** REPEATER */

export interface RepeaterFieldConfig extends FieldConfig {
  type: 'REPEATER';
  fields: Array<FieldConfigUnion>;
  meta: { view?: 'TABLE' };
}
export type RepeaterField = Field<
  RepeaterFieldConfig,
  Array<{ id: string; value: Array<FieldUnion> }>
>;
export type RepeaterIncomingValue = Array<
  Array<FieldShortType<IncomingValueUnion>>
>;
export type RepeaterOutgoingValue = Array<
  Array<FieldShortType<OutgoingValueUnion>>
>;

/** All */
export type FieldConfigUnion =
  | StringFieldConfig
  | UrlFieldConfig
  | TextFieldConfig
  | NumberFieldConfig
  | HtmlFieldConfig
  | DateFieldConfig
  | DateTimeFieldConfig
  | ImageFieldConfig
  | GalleryFieldConfig
  | FileFieldConfig
  | RepeaterFieldConfig;

export type FieldUnion =
  | StringField
  | UrlField
  | TextField
  | NumberField
  | HtmlField
  | DateField
  | DateTimeField
  | ImageField
  | GalleryField
  | FileField
  | RepeaterField
  | UnknownField;

export type IncomingValueUnion =
  | StringIncomingValue
  | UrlIncomingValue
  | TextIncomingValue
  | NumberIncomingValue
  | HtmlIncomingValue
  | DateIncomingValue
  | DateTimeIncomingValue
  | ImageIncomingValue
  | GalleryIncomingValue
  | FileIncomingValue
  | RepeaterIncomingValue
  | UnknownIncomingValue;

export type OutgoingValueUnion =
  | StringOutgoingValue
  | UrlOutgoingValue
  | TextOutgoingValue
  | NumberOutgoingValue
  | HtmlOutgoingValue
  | DateOutgoingValue
  | DateTimeOutgoingValue
  | ImageOutgoingValue
  | GalleryOutgoingValue
  | FileOutgoingValue
  | RepeaterOutgoingValue
  | UnknownOutgoingValue;
