import {MUSCLE_GROUPS} from "./muscle_group";

export const EXERCISES = [
    // Abductors
    {
        "name": "clamshells",
        "muscle_groups": [MUSCLE_GROUPS[0]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "side_leg_raises",
        "muscle_groups": [MUSCLE_GROUPS[0]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "standing_leg_abductions",
        "muscle_groups": [MUSCLE_GROUPS[0]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },

    // Abs
    {
        "name": "mountain_climbers",
        "muscle_groups": [MUSCLE_GROUPS[1]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 15, "intermediate": 20, "advanced": 25}
    },
    {
        "name": "planks",
        "muscle_groups": [MUSCLE_GROUPS[1]],
        "duration": null,
        "equipment": [],
        "format": "standing",
        "value": {"beginner": 30, "intermediate": 60, "advanced": 120}
    },
    {
        "name": "reverse_crunches",
        "muscle_groups": [MUSCLE_GROUPS[1]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },

    // Adductors
    {
        "name": "standing_hip_adduction",
        "muscle_groups": [MUSCLE_GROUPS[2]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "lateral_bound",
        "muscle_groups": [MUSCLE_GROUPS[2]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 16}
    },
    {
        "name": "cable_hip_adduction",
        "muscle_groups": [MUSCLE_GROUPS[2]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },

    // Back
    {
        "name": "bent_over_rows",
        "muscle_groups": [MUSCLE_GROUPS[3]],
        "duration": 5,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "bodyweight_rows",
        "muscle_groups": [MUSCLE_GROUPS[3]],
        "duration": 5,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "pull_ups",
        "muscle_groups": [MUSCLE_GROUPS[3]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 5, "intermediate": 8, "advanced": 12}
    },

    // Calve
    {
        "name": "calf_raises",
        "muscle_groups": [MUSCLE_GROUPS[4]],
        "duration": 4,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 20, "advanced": 30}
    },
    {
        "name": "seated_calf_raises",
        "muscle_groups": [MUSCLE_GROUPS[4]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 20, "advanced": 30}
    },
    {
        "name": "standing_calf_raises",
        "muscle_groups": [MUSCLE_GROUPS[4]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 20, "advanced": 30}
    },

    // Chest
    {
        "name": "chest_dips",
        "muscle_groups": [MUSCLE_GROUPS[5]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "push_ups",
        "muscle_groups": [MUSCLE_GROUPS[5]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "wide_grip_push_ups",
        "muscle_groups": [MUSCLE_GROUPS[5]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },

    // Forearms
    {
        "name": "plank_variations",
        "muscle_groups": [MUSCLE_GROUPS[6]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 15, "intermediate": 20, "advanced": 25}
    },
    {
        "name": "reverse_wrist_curls",
        "muscle_groups": [MUSCLE_GROUPS[6]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "wrist_curls",
        "muscle_groups": [MUSCLE_GROUPS[6]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },

    // Glutes
    {
        "name": "donkey_kicks",
        "muscle_groups": [MUSCLE_GROUPS[7]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "hip_thrusts",
        "muscle_groups": [MUSCLE_GROUPS[7]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "lunges",
        "muscle_groups": [MUSCLE_GROUPS[7]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },

    // Hamstrings
    {
        "name": "glute_bridges",
        "muscle_groups": [MUSCLE_GROUPS[8]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "hamstring_curls",
        "muscle_groups": [MUSCLE_GROUPS[8]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "stiff_leg_deadlifts",
        "muscle_groups": [MUSCLE_GROUPS[8]],
        "duration": 4,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },

    // Lower Back
    {
        "name": "good_mornings",
        "muscle_groups": [MUSCLE_GROUPS[9]],
        "duration": 4,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "hip_hinges",
        "muscle_groups": [MUSCLE_GROUPS[9]],
        "duration": 4,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 15}
    },
    {
        "name": "supermans",
        "muscle_groups": [MUSCLE_GROUPS[9]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },

    // Neck
    {
        "name": "neck_extension",
        "muscle_groups": [MUSCLE_GROUPS[10]],
        "duration": null,
        "equipment": [],
        "format": "standing",
        "value": {"beginner": 15, "intermediate": 20, "advanced": 25}
    },
    {
        "name": "neck_flexion",
        "muscle_groups": [MUSCLE_GROUPS[10]],
        "duration": null,
        "equipment": [],
        "format": "standing",
        "value": {"beginner": 15, "intermediate": 20, "advanced": 25}
    },
    {
        "name": "side_neck_stretch",
        "muscle_groups": [MUSCLE_GROUPS[10]],
        "duration": null,
        "equipment": [],
        "format": "standing",
        "value": {"beginner": 15, "intermediate": 20, "advanced": 25}
    },

    // Quadriceps
    {
        "name": "squats",
        "muscle_groups": [MUSCLE_GROUPS[11]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "lunges",
        "muscle_groups": [MUSCLE_GROUPS[11]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "step_ups",
        "muscle_groups": [MUSCLE_GROUPS[11]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },

    // Shoulders
    {
        "name": "handstand_push_ups",
        "muscle_groups": [MUSCLE_GROUPS[12]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 16}
    },
    {
        "name": "lateral_raises",
        "muscle_groups": [MUSCLE_GROUPS[12]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "shoulder_press",
        "muscle_groups": [MUSCLE_GROUPS[12]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 8, "intermediate": 12, "advanced": 16}
    },

    // Trapezius
    {
        "name": "plank_taps",
        "muscle_groups": [MUSCLE_GROUPS[13]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "shoulder_shrugs",
        "muscle_groups": [MUSCLE_GROUPS[13]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "upright_rows",
        "muscle_groups": [MUSCLE_GROUPS[13]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },

    // Triceps
    {
        "name": "close_grip_push_ups",
        "muscle_groups": [MUSCLE_GROUPS[14]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
    {
        "name": "diamond_push_ups",
        "muscle_groups": [MUSCLE_GROUPS[14]],
        "duration": 2,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 12, "intermediate": 18, "advanced": 24}
    },
    {
        "name": "tricep_dips",
        "muscle_groups": [MUSCLE_GROUPS[14]],
        "duration": 3,
        "equipment": [],
        "format": "repetition",
        "value": {"beginner": 10, "intermediate": 15, "advanced": 20}
    },
]
