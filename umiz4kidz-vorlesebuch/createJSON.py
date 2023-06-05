import os
import json

# Set the root folder to the current directory
root_folder = './'

# Loop through all folders in the root directory
for folder in os.listdir(root_folder):
    # Check if the current item is a folder
    if os.path.isdir(folder):
        # Get a list of all files in the folder
        file_list = os.listdir(folder)

        # Create an empty dictionary to store the file data
        data_dict = {}

        # Loop through each file in the folder
        for file_name in file_list:
            # Extract the last two characters of the file name
            page_num_chars = file_name.split('.')[0][-2:]

            # Check if the last two characters contain any digits
            if any(c.isdigit() for c in page_num_chars):
                # Extract the digits from the last two characters of the file name
                page_num = ''.join(filter(str.isdigit, page_num_chars))

                # If there are no digits, use the last character as the page number
                if len(page_num) == 0:
                    page_num = page_num_chars[-1]
                else:
                    # If there are digits, convert them to an integer
                    page_num = int(page_num)

                # Get the file extension and full file path
                file_ext = file_name.split('.')[-1]
                file_path = os.path.join(folder, file_name)

                # If the page number is not already in the dictionary, add it
                if page_num not in data_dict:
                    data_dict[page_num] = {}
                    data_dict[page_num]['map'] = [];

                # If the file is a JPEG, store the file name under the 'img' key
                if file_ext == 'jpeg':
                    data_dict[page_num]['img'] = file_name
                # If the file is an MP3 and contains "eite" in the file name, store the file name under the appropriate key
                elif file_ext == 'mp3' and 'eite' in file_name:
                    key = file_name.split('.')[0][0]
                    data_dict[page_num][key] = file_name

                # Print the name of the file that was just processed
                print(file_name)

        # Sort the dictionary by the page number key
        sorted_data_dict = dict(sorted(data_dict.items()))

        # Write the dictionary to a JSON file named 'data.json' in the folder, with nicely formatted output
        with open(os.path.join(folder, 'data.json'), 'w') as f:
            json.dump(sorted_data_dict, f, indent=4)
