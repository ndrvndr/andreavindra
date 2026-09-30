import { Control, Controller } from "react-hook-form"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import type { FormValues } from "../contact-schema"

type FieldName = Exclude<keyof FormValues, "website">

type ContactFieldProps = {
  control: Control<FormValues>
  name: FieldName
  label: string
  placeholder: string
  autoComplete?: string
  maxLength?: number
  type?: React.ComponentProps<typeof Input>["type"]
  inputMode?: React.ComponentProps<typeof Input>["inputMode"]
  multiline?: boolean
  rows?: number
}

export function ContactField({
  control,
  name,
  label,
  placeholder,
  autoComplete,
  maxLength,
  type,
  inputMode,
  multiline = false,
  rows = 6,
}: ContactFieldProps) {
  const id = `contact-${name}`
  const errorId = `${id}-error`

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const sharedProps = {
          ...field,
          id,
          placeholder,
          autoComplete,
          maxLength,
          required: true,
          "aria-required": true,
          "aria-invalid": fieldState.invalid,
          "aria-describedby": fieldState.invalid ? errorId : undefined,
        } as const

        return (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>

            {multiline ? (
              <Textarea
                {...sharedProps}
                rows={rows}
                className="min-h-32 resize-none"
              />
            ) : (
              <Input {...sharedProps} type={type} inputMode={inputMode} />
            )}

            {fieldState.invalid && (
              <FieldError id={errorId} errors={[fieldState.error]} />
            )}
          </Field>
        )
      }}
    />
  )
}
