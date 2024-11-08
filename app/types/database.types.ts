export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      diet_preferences: {
        Row: {
          diet_preference_id: number
          feeding_schedule: string | null
          food_type: string | null
          pet_id: number | null
          quantity: string | null
        }
        Insert: {
          diet_preference_id?: never
          feeding_schedule?: string | null
          food_type?: string | null
          pet_id?: number | null
          quantity?: string | null
        }
        Update: {
          diet_preference_id?: never
          feeding_schedule?: string | null
          food_type?: string | null
          pet_id?: number | null
          quantity?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diet_preferences_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["pet_id"]
          },
        ]
      }
      grooming_appointments: {
        Row: {
          appointment_date: string | null
          groomer_name: string | null
          grooming_appointment_id: number
          notes: string | null
          pet_id: number | null
        }
        Insert: {
          appointment_date?: string | null
          groomer_name?: string | null
          grooming_appointment_id?: never
          notes?: string | null
          pet_id?: number | null
        }
        Update: {
          appointment_date?: string | null
          groomer_name?: string | null
          grooming_appointment_id?: never
          notes?: string | null
          pet_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "grooming_appointments_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["pet_id"]
          },
        ]
      }
      health_milestones: {
        Row: {
          date_recorded: string | null
          exercise_routine: string | null
          health_milestone_id: number
          pet_id: number | null
          weight: number | null
        }
        Insert: {
          date_recorded?: string | null
          exercise_routine?: string | null
          health_milestone_id?: never
          pet_id?: number | null
          weight?: number | null
        }
        Update: {
          date_recorded?: string | null
          exercise_routine?: string | null
          health_milestone_id?: never
          pet_id?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "health_milestones_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["pet_id"]
          },
        ]
      }
      owners: {
        Row: {
          contact_info: string | null
          name: string | null
          owner_id: number
        }
        Insert: {
          contact_info?: string | null
          name?: string | null
          owner_id?: never
        }
        Update: {
          contact_info?: string | null
          name?: string | null
          owner_id?: never
        }
        Relationships: []
      }
      pets: {
        Row: {
          birth_date: string | null
          breed: string | null
          name: string | null
          owner_id: number | null
          pet_id: number
          species: string | null
        }
        Insert: {
          birth_date?: string | null
          breed?: string | null
          name?: string | null
          owner_id?: number | null
          pet_id?: never
          species?: string | null
        }
        Update: {
          birth_date?: string | null
          breed?: string | null
          name?: string | null
          owner_id?: number | null
          pet_id?: never
          species?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "owners"
            referencedColumns: ["owner_id"]
          },
        ]
      }
      reminders: {
        Row: {
          description: string | null
          pet_id: number | null
          reminder_date: string | null
          reminder_id: number
        }
        Insert: {
          description?: string | null
          pet_id?: number | null
          reminder_date?: string | null
          reminder_id?: never
        }
        Update: {
          description?: string | null
          pet_id?: number | null
          reminder_date?: string | null
          reminder_id?: never
        }
        Relationships: [
          {
            foreignKeyName: "reminders_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["pet_id"]
          },
        ]
      }
      vaccinations: {
        Row: {
          date_administered: string | null
          next_due_date: string | null
          pet_id: number | null
          vaccination_id: number
          vaccine_name: string | null
        }
        Insert: {
          date_administered?: string | null
          next_due_date?: string | null
          pet_id?: number | null
          vaccination_id?: never
          vaccine_name?: string | null
        }
        Update: {
          date_administered?: string | null
          next_due_date?: string | null
          pet_id?: number | null
          vaccination_id?: never
          vaccine_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vaccinations_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["pet_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
