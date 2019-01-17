import os
for filename in os.listdir("."):
	if filename.endswith(".jpg") or filename.endswith(".png"):
		os.rename(filename, filename[-6:])