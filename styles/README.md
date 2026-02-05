# UI Foundation — CSS Architecture

This folder defines the global styling system for all projects.

## Layers (in load order)

1. tokens.css
   - Design authority only
   - Colors, spacing, radius, shadows, fonts
   - No selectors beyond :root
   - No layout, no components

2. foundation.css
   - Base behavior and safety
   - Resets, box model, typography defaults
   - No component styling
   - No Tailwind utilities

3. components.css
   - Reusable UI patterns only
   - Buttons, panels, tables, badges
   - No page-specific styles
   - No values that bypass tokens

## Rules

- Tokens are the single source of truth
- Tailwind is an execution layer, not a design system
- If styling feels unclear, stop and refactor
- Copy this folder into any project unchanged

This system is intentionally boring.
