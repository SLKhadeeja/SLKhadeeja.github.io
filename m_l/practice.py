import pandas as pd
data = pd.read_csv("C:\\Users\\ladankhadija\\Documents\\persona\\From Mr. Abdullahi\\ranges of data sizes\\5000\\5000 clients.csv")
print(data.loc[[3000, 4000, 4999], ['age', 'job', 'education']])