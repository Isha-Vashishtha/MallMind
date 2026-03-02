# 🤖 AI Agent Design – Mall-Mind

Instead of responding like a chatbot, the AI:
- Understands user intent
- Calls backend functions
- Retrieves real data
- Returns structured shopping assistance

## Function Name
searchInventory

## Description
Searches the mall inventory database for products matching user intent.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| product   | string | Item user wants (e.g., suit, jacket) |
| color     | string | Preferred color |
| budget    | number | Maximum price |
| category  | string (optional) | Product category |

---

## AI Function Calling Schema (JSON)

```json
{
  "name": "searchInventory",
  "description": "Search for products in the mall inventory database",
  "parameters": {
    "type": "object",
    "properties": {
      "product": { "type": "string" },
      "color": { "type": "string" },
      "budget": { "type": "number" },
      "category": { "type": "string" }
    },
    "required": ["product"]
  }
}
```
## Returns
- List of matched products  
- Store name  
- Price  
- Stock availability  
- Store location (x, y, floor)

---

## Agent Behavior

The AI assistant should:
- Extract product name, color, and budget from user input.
- Call the `searchInventory` function when a product search is required.
- Return structured and concise responses.
- Ask follow-up questions if required information is missing.

---

## Example Flow

User: "I need a blue suit under 300 dollars."

AI:
Calls `searchInventory({ product: "suit", color: "blue", budget: 300 })`

System:
Returns matching inventory results.

AI:
Formats and presents the results to the user.
