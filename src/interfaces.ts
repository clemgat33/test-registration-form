// list of interfaces


export interface Step {
  name: string;
  fields: Field[]
}

export type Inputs = any //Record<string, unknown>
export type Errors = any //Record<string, unknown>

export interface Field  {
  label: string;
  name: string;
  type:  string;
  required: boolean;
  validation?: Validation;
  options?: string[] | undefined;
}

export interface Validation  {
  type: string;
  message: string;
  min?: number;
  max?: number;
}
